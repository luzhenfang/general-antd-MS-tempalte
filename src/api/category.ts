import { http } from "@/utils";

export const getCategoryList = async () => {
  let res = (await http.get("/api/v1/category")).data;
  return res.data;
};
