import axios from "axios";
import { API_URL } from "@/src/constants/env";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});