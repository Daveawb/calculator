import * as React from 'react';

export type RawButtonProps = {
    children?: React.ReactNode;
    className?: string;
    fn: (event: React.MouseEvent) => void;
    value: string;
};

export const RawButton: React.FC<RawButtonProps> = (props: RawButtonProps) => {
    const { value, fn, className } = props;
    return (
        <button type="button" className={className} onClick={fn}>
            <span>{value}</span>
        </button>
    );
};
