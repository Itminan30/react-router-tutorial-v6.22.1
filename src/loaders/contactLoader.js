import { getContact, getContacts } from "../contacts";

export async function contactsLoader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts };
}

export async function contactLoader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}