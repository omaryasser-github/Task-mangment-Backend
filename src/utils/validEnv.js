import { cleanEnv, port , str} from "envalid";

export default cleanEnv(process.env, {
  PORT: port(),
  DATABASE_URI: str(),
  NODE_ENV:str()
});
