import { ApiProperty } from "@nestjs/swagger";

export class Vote {
    @ApiProperty()
    voterPrivateKey: string;
    @ApiProperty()
    proposalNumber: number;
    @ApiProperty()
    numberOfVotes: number;
}