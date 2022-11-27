import { TextTranscripts } from "../schema/textTranscripts-schema.js";

export default class TextTranscriptsDAO {
  /**
   * Get an array of all the text transcripts in MongoDB
   * @returns Array of all the text transcripts from the database
   */
  async getTextTranscripts() {
    try {
      return await TextTranscripts.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return [];
    }
  }

  /**
   * Add a text transcript object into the database
   * @returns
   * @param projectId
   * @param dialogue
   */
  async addTextTranscript(projectId, dialogue) {
    try {
      const transcriptDoc = {
        project_id: projectId,
        dialogue: dialogue,
      };
      return TextTranscripts.create(transcriptDoc);
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`);
      return { error: e };
    }
  }

  async flushDatabase() {
    await TextTranscripts.deleteMany({});
  }
}
