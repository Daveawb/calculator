import * as React from 'react';

type RawScreenProps = {
    displayValue: string;
    className?: string;
};

export const RawScreen: React.FC<RawScreenProps> = (props: RawScreenProps) => {
    const { className, displayValue } = props;

    return (
        <div className={className}>
            <span>{displayValue}</span>
        </div>
    );
};
