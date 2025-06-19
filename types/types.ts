export type TierAccess = 'ripple' | 'sunsetCircle' | 'electricCollective';
export type MembershipLevel = 1 | 2 | 3;

export interface Membership extends Record<TierAccess, MembershipLevel> {
    ripple: 1;
    sunsetCircle: 2;
    electricCollective: 3;
}

export const tierMap: Record<TierAccess, MembershipLevel> = {
    ripple: 1,
    sunsetCircle: 2,
    electricCollective: 3,
}

export const membershipMap: Record<MembershipLevel, string> = {
    1: "Level 1: Ripple Membership",
    2: "Level 2: Sunset Circle",
    3: "Level 3: Electric Collective"
}

export const getTierFromLevel = (level: MembershipLevel) : TierAccess => {
    return Object.entries(tierMap).find(
        ([,value]) => value === level
    )?.[0] as TierAccess;
}