declare module 'react-aux' {
    import * as React from 'react';
    type AuxProps = {
        children: Array<React.ReactNode>
    }
    class Aux extends React.Component<AuxProps, any> {}
    export default Aux;
}
