// export async function createDyteMeeting(data: any) {

//     data = data || {}
//     data["title"] = data["title"] || "Default Meeting"

//     let meetingData = await DyteCommunicationUtils.getInstance().meetings.createMeeting(data);

//     return {
//         meetingId: meetingData["id"],
//         createdOn: meetingData["created_at"],
//         status: meetingData["status"]
//     }
// }

// export async function deactivateDyteMeeting(meetingId: string) {
//     let data = { status: "INACTIVE" }
//     let meetingData = await DyteCommunicationUtils.getInstance().meetings.updateMeeting(meetingId, data);
//     return {
//         meeting_id: meetingData["id"],
//         created_on: meetingData["created_at"],
//         status: meetingData["status"]
//     }
// }


// export async function generateDyteTokensForMeeting(meetingId: string, data: { preset: string, name: string, participantId: string }) {

//     if (meetingId) {

//         let { id, token, custom_participant_id } = await DyteCommunicationUtils.getInstance().meetings.generateTokens(meetingId, {
//             preset_name : data.preset,
//             custom_participant_id: data.participantId,
//             name: data.name
//         });
//         return { dyteParticipantId: id, token, participantId: custom_participant_id }
//     } else throw `meetingId required`

// }