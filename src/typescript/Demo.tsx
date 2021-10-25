import React from 'react';

export class Demo {
    public demo() {
        console.log('demo');
    }
}

export class ComponentBla extends React.Component<any, any> {
    render() {
        return (
            <div>
                hola mundo desde BLA!!!!
            </div>
        )
    }
}

export const FunctionalBla: React.FC = () => (
    <div>
        hola desde functional bla!!!!
    </div>
)

