export function formatDate(dateString: string|undefined) {
    if(dateString) {
        const [datePart, timePart] = dateString.split(" ");
        const [year, month, day] = datePart.split("-");
        const [hour, minute] = timePart.split(":");

        return `${day}.${month}.${year} ${hour}:${minute}`;
    }
    return null;
}
