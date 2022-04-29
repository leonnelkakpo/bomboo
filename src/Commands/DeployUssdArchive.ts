import Bomboo from "../index";

export default async (payload: {
  key: string;
  id: string;
  archive: string;
  sandbox: boolean;
}) => {
  if (!payload.key) {
    return console.log("[key] is required");
  }
  if (!payload.id) {
    return console.log("[key] is required");
  }
  if (!payload.archive) {
    return console.log("[archive] is required");
  }

  const bomboo = new Bomboo(payload.key);
  try {
    const response = await bomboo.deploy(payload.id, payload.archive);

    return console.log(response);
  } catch (error) {
    console.log("something went wrong", error);
  }
};
