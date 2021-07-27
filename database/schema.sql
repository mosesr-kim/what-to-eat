set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
  "createdAt" timestamp(6) with time zone NOT NULL default now(),
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."collections" (
	"collectionId" serial NOT NULL,
	"userId" integer NOT NULL,
  "name" TEXT NOT NULL,
  "createdAt" timestamp(6) with time zone NOT NULL default now(),
	CONSTRAINT "collections_pk" PRIMARY KEY ("collectionId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."restaurants" (
	"collectionId" integer NOT NULL,
	"businessId" TEXT NOT NULL,
  "json" json NOT NULL,
	"createdAt" timestamp(6) with time zone NOT NULL default now()
) WITH (
  OIDS=FALSE
);



ALTER TABLE "collections" ADD CONSTRAINT "collections_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_fk0" FOREIGN KEY ("collectionId") REFERENCES "collections"("collectionId");
