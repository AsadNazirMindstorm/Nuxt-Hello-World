import db from "~/db/db";
import { NewUserSchema } from "~/schemas/NewUserSchema";

export default defineEventHandler(async (event) => {
  try {
    const res: NewUserSchema[] = await db("users").select("*").returning("*");

    return {
      response: res,
    };
  } catch (E: any) {
    return {
      errorResponse: E.message,
    };
  }

  // Returning the us
});
