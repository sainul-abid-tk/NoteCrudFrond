import { commonAPI } from "./commonApi"
import { SERVER_URL } from "./serverURL"

// Add notes
export const uploadNewNoteAPI =async(note)=>{
    return await commonAPI("POST",`${SERVER_URL}/allnotes`,note)
}

// get all notes
export const getAllNotesAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allnotes`,"")
}

// Remove note
export const removeNoteAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allnotes/${id}`,{})
}

// Update Note
export const updateNoteAPI=async (id,noteDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allnotes/${id}`,noteDetails)
}