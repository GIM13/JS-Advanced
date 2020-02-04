function tickets(array = [], str = ``) {

    let ticketsList = [];

    class Ticket {
        constructor([...arr]) {
            this.destination = arr[0],
                this.price = +arr[1],
                this.status = arr[2]
        }
    }

    ticketsList = array.reduce((acc, el) => {
        let ticketInfo = el.split(`|`);
        acc.push(new Ticket(ticketInfo));
        return acc;
    }, []);

    if (str === `price`) {
        ticketsList.sort((a, b) => a - b);
    } else {
        ticketsList.sort((a,b) => a[`${str}`].localeCompare(b[`${str}`]));
    }
    return ticketsList
}
console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'

))