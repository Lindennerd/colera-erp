"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database/types";

const supabaseClient = createClientComponentClient<Database>();

export default supabaseClient;
