import { PickBanCard } from "./PickBan/PickBanCard";
import { PicksAndBansProps } from "./PicksAndBansProps";
import "./PicksAndBans.scss";

export const PicksAndBans: React.FC<PicksAndBansProps> = (props) => {

    const { picksAndBans } = props;

    return (<div className="picks-and-bans">
        {picksAndBans
            .sort(pickBan => pickBan.order)
            .map((pickBan, index) => <PickBanCard {...pickBan} key={index} />)
        }
    </div>);
}