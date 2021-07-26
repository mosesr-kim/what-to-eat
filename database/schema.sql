set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Collections" (
	"collectionId" serial NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "Collections_pk" PRIMARY KEY ("collectionId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Collections" ADD CONSTRAINT "Collections_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
