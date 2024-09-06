import { Request, Response } from "express";
import _ from "lodash";
import { addParticipantToAzureMeeting, generateAzureTokens, refreshAzureTokens } from "../helpers/azureHelper";

export async function generateAzureTokensController(req: Request, res: Response) {
    try {
        let participantId: any = _.get(req.body, "participant_id");
        let meetingId: any = _.get(req.body, "meeting_id");
        let role: any = _.get(req.body, "role");
        let resp = await generateAzureTokens(participantId);
        if (meetingId) await addParticipantToAzureMeeting({ meetingId, participantIdentity: resp.identity, role })
        return res.status(200).json(resp)
    } catch (e) {
        console.log(`Error ${req.method} @azureTokens : get ${JSON.stringify(e)}`);
        return res.status(200).json({ message: `Something went wrong` });
    }
}

export async function refreshAzureTokenController(req: Request, res: Response) {
    try {
        let participantIdentity = req.body['participant_identity']

        if (!participantIdentity) throw `participant_identity required`

        let resp = await refreshAzureTokens(participantIdentity);

        return res.status(200).json(resp)

    } catch (e) {
        console.log(`Error ${req.method} @refreshToken : get ${JSON.stringify(e)}`);
        return res.status(200).json({ message: `Something went wrong` });
    }

}