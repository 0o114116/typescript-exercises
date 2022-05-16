// Chapter 4, Exercise 3

type Reservation = {
    a: string
};

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};

let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) =>
{
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && typeof destination !== undefined)
        return {a: "a"};
    else if (fromOrDestination instanceof Date && typeof toOrDestination == "string")
        return {a: "b"};
    else if (typeof fromOrDestination == "string")
        return {a: "c"};

    return {a: "d"};
}

// Chapter 4, Exercise 4

function call<T extends [unknown, string, ...unknown[]], U>(fn: (...fnArgs: T) => U, ...args: T): U
{
    return fn(...args)
}

// Chapter 4, Exercise 5

function is<T>(...args: T[]): boolean {
    return args.every(_ => _ === args[0])
}

// Chapter 5, Exercise 3

interface Shoe {
    purpose: string
}

class BalletFlat implements Shoe
{
    purpose = 'dancing'
}

class Boot implements Shoe
{
    purpose = 'woodcutting'
}

class Sneaker implements Shoe
{
    purpose = 'walking'
}

type ShoeFactory = {
    create(type: "balletFlat"): BalletFlat;
    create(type: "boot"): Boot;
    create(type: "sneaker"): Sneaker;
}

let Shoe: ShoeFactory = {
    create(type: "balletFlat" | "boot" | "sneaker"): BalletFlat | Boot | Sneaker {
        switch (type)
        {
            case "balletFlat": return new BalletFlat;
            case "boot": return new Boot;
            case "sneaker": return new Sneaker;
        }
    }
}