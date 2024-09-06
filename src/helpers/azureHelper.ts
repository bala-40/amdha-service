import _ from "lodash";
import { Constants } from "../utils/constants";
import { AcsUtils } from "../utils/acsUtils";
import { ParticipantRole, RoomParticipant } from "@azure/communication-rooms";
import { CommunicationUserIdentifier } from "@azure/communication-common";
import { CommunicationUserToken } from "@azure/communication-identity";

export async function createAzureMeeting(data: { start?: string, end?: string }) {

    const validFrom = data.start ? new Date(data.start) : new Date();
    const validUntil = data.end ? new Date(data.end) : new Date(validFrom.getTime() + 24 * 60 * 60 * 1000);

    const room = await AcsUtils.roomsClient.createRoom({
        validFrom,
        validUntil
    });

    return {
        meeting_id: room.id,
        created_on: room.createdOn,
        valid_from: room.validFrom,
        valid_until: room.validUntil
    }
}

export async function addParticipantToAzureMeeting(data: { participantIdentity: string, meetingId: string, role?: string }) {
    data.role = data.role && _.values(Constants.AZURE_ROOM_ROLES).includes(data.role) ? data.role : Constants.AZURE_ROOM_ROLES.PRESENTER
    const addParticipantsList: RoomParticipant[] = [
        {
            id: { kind: 'communicationUser', communicationUserId: data.participantIdentity },
            role: data.role as ParticipantRole
        }
    ];
    await AcsUtils.roomsClient.addOrUpdateParticipants(data.meetingId, addParticipantsList);
}

export async function generateAzureTokens(participantId: string): Promise<{ identity: string, token: string, expiresOn: Date }> {

    if (participantId) {

        let { identity, token, expiresOn } = await AcsUtils.createIdentity();

        if (identity && token && expiresOn) {
            return {
                identity, token, expiresOn
            }
        } else throw `Invalid resp ${{ identity, token, expiresOn }}`
    } else throw `participantId required`

}

export async function refreshAzureTokens(participantIdentity: string): Promise<CommunicationUserToken> {
    const user: CommunicationUserIdentifier = {
        communicationUserId: participantIdentity
    };

    const token = await AcsUtils.communicationIdentityClient.getToken(user, ['chat', 'voip']);

    return {
        user,
        ...token
    };
}

