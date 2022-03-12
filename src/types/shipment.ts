export type ShipmentStatus = "initiated" | "pickedUp" | "inTransit" | "delivered"

export type ShipmentHistory = Record<string, { id: string, time: string, address: string, comment: string }[]>

export type AddressInfo = {
    name: string
    streetAddress: string
    address: string
    phone: string
    email?: string
    company?: string
}

export type Location = {
    id: string
    date: string
    address: string
    comment: string
}

export interface Shipment {
    id: string
    trackingId: string
    desc: string
    shipper: AddressInfo
    receiver: AddressInfo
    status: ShipmentStatus
    shipDate: string
    scheduledDate: string
    arrivalDate: string | null
    weight: string
    dimensions: string
    service: string
    signature: boolean
    locations: Location[]
}