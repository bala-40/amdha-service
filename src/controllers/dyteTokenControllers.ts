import { Request, Response } from "express";
import _ from "lodash";
import { Constants } from "../utils/constants";
import { generateDyteTokensForMeeting } from "../helpers/dyteHelper";

export async function generateDyteTokensController(req : Request, res : Response) {
    try {
       
        let body = req.body;

        const meetingId: string = _.get(body, "meeting_id"); //meetingId
        const participantPreset: string = _.get(body, "preset") || Constants.DYTE_MEETING_ROLES.PARTICIPANT;
        const participantName: string = _.get(body, "participant_name");
        const participantId: string = _.get(body, "participant_id");

        let result = await generateDyteTokensForMeeting(meetingId, { preset: participantPreset, participantId, name: participantName })

        return res.status(200).json({
            dyte_participant_id: result.dyteParticipantId,
            token: result.token,
            participant_id: result.participantId
        });

    } catch (e) {
        console.log(`Error ${req.method} @dyteTokens : get ${JSON.stringify(e)}`);
        return res.status(500).json({ message: `Something went wrong` });
    }
}