import axios from "axios";

export const baseUrl = process.env.BASE_URL ?? "http://localhost";

export const instance = axios.create();
