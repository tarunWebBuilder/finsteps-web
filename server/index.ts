import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.",
    );
  }

  return createClient(supabaseUrl, serviceRoleKey);
}

export function createServer() {
  const app = express();
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          error: "Email required",
        });
      }

      const supabase = getSupabaseAdmin();
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        return res.status(400).json({
          error: error.message,
        });
      }

      return res.json({
        success: true,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected server error";

      return res.status(500).json({
        error: message,
      });
    }
  });

  return app;
}
