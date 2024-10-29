CREATE SCHEMA "taskboard";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taskboard"."project" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"created_at" date DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taskboard"."task" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"status_id" uuid NOT NULL,
	"project_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "taskboard"."status" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"color" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taskboard"."task" ADD CONSTRAINT "task_status_id_status_id_fk" FOREIGN KEY ("status_id") REFERENCES "taskboard"."status"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taskboard"."task" ADD CONSTRAINT "task_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "taskboard"."project"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_project_name" ON "taskboard"."project" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_task_status" ON "taskboard"."task" USING btree ("status_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_task_project" ON "taskboard"."task" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_status_name" ON "taskboard"."status" USING btree ("name");