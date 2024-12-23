
export type BadgeState = 'paid' | 'pending' | 'draft';

export interface BadgeProps {
    state: BadgeState;
}