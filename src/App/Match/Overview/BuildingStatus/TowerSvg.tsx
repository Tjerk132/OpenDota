export const TowerSvg: React.FC = () => {
    return <svg width="24" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- Front face --> */}
        <polygon points="5,5 15,5 15,20 5,20" fill="#FF4136" stroke="black" strokeWidth="0.3" />

        {/* <!-- Top face --> */}
        <polygon points="5,5 3,2 13,2 15,5" fill="#FF725C" stroke="black" strokeWidth="0.3" />

        {/* <!-- Side face --> */}
        <polygon points="5,5 3,2 3,17 5,20" fill="#FF725C" stroke="black" strokeWidth="0.3" />

        {/* <!-- Left edge --> */}
        <line x1="3" y1="2" x2="3" y2="17" stroke="black" strokeWidth="0.3" />
        {/* <!-- Top edge --> */}
        <line x1="3" y1="2" x2="13" y2="2" stroke="black" strokeWidth="0.3" />
        {/* <!-- Right edge --> */}
        <line x1="13" y1="2" x2="15" y2="5" stroke="black" strokeWidth="0.3" />
    </svg>
}