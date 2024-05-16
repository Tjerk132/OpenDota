import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { red } from '@mui/material/colors';

import { PickBan } from "../PickBan";
import { Hero } from '../../../../../components/image/Hero/Hero';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import "./PickBan.scss";

export const PickBanCard: React.FC<PickBan> = (props) => {

    const { isPick, heroId, teamSide, order } = props;

    return (
        <Card
            className={`pick-ban pick-ban--${teamSide}`}>
            <Hero heroId={heroId} overlay={{ text: order + 1, position: 'top-right' }} style={{ width: "100%", height: "48px", maxWidth: 80, minWidth: 80 }} />
            <CardActions disableSpacing sx={{
                height: 20,
                padding: 0
            }}>
                <div className='pick-ban__label'>
                    {
                        isPick
                            ? <>
                                <CheckIcon color='success' stroke='green' strokeWidth={3} />
                                <p>PICK</p>
                            </>
                            : <>
                                <CloseIcon color='error' stroke='red' strokeWidth={3} />
                                <p>BAN</p>
                            </>
                    }
                </div>
            </CardActions>
        </Card>
    );
}