import { Minter } from "../../models/minter.model";

export interface IMintService {
  mintTokens(minter: Minter): Promise<string>;
}