import { z } from "zod";
import { create } from "zustand";

export const MOBILE_WIDTH = "800px";

export function isDefined<T>(val: T): val is NonNullable<T> {
  if (val === undefined || val === null) {
    return false;
  }
  return true;
}

export function assertDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw Error();
  }
}

export function toDefined<T>(val: T): NonNullable<T> {
  assertDefined(val);
  return val;
}

export const validStrSchema = z.string().min(1).brand<"ValidStr">();
export type ValidStr = z.infer<typeof validStrSchema>;

export function toValidStr(str: unknown): ValidStr {
  return validStrSchema.parse(str);
}

export function isValidStr(str: unknown): str is ValidStr {
  return validStrSchema.safeParse(str).success;
}

type Page = "Calendar" | "Sleep" | "Home";

export const useAppStore = create<{
  page: Page;
  setPage: (value: Page) => void;
}>()((set) => ({
  page: "Calendar" as Page,
  setPage: (value) => set({ page: value }),
}));
