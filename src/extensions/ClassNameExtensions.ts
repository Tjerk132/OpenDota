import classNames, { Argument } from "classnames";

export const conditionalClassName = (className: string, condition: boolean) => classNames({[className]: condition});

export const conditionalClassNames = (args: Array<Argument>) => classNames(args);

// conditionalClassNames([
//     { 'player-tab-row__top-amount': condition},
//     {'player-tab-row--dire': false }
// ]);