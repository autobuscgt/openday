import { useState, useEffect } from 'react';
import { useQuest } from '../../context/questContext';
import pack from '../../assets/center_div/package.png';
import arrow from '../../assets/center_div/arrow.png';
import back from '../../assets/center_div/back.png';
import out from '../../assets/center_div/out.png';
import resetButton from '../../assets/center_div/button.png';

const CenterDivModal = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('flex-start');
    const [flexDirection, setFlexDirection] = useState('row');
    const [isCentered, setIsCentered] = useState(false);
    const [showOffer, setShowOffer] = useState(false);
    const { updateQuestStatus } = useQuest();

    const justifyOptions = [
        { value: 'flex-start', label: 'Начало', icon: arrow, style: { transform: 'rotate(180deg)' } },
        { value: 'center', label: 'Центр', icon2: arrow, style2: { transform: 'rotate(180deg)' }, icon: arrow },
        { value: 'flex-end', label: 'Конец', icon: arrow },
        { value: 'space-between', label: 'Между', icon: arrow, style: { transform: 'rotate(180deg)' }, icon2: arrow },
        { value: 'space-around', label: 'Вокруг', icon: back }
    ];

    const alignOptions = [
        { value: 'flex-start', label: 'Верх', icon: arrow, style: { transform: 'rotate(270deg)' } },
        { value: 'center', label: 'Центр', icon2: arrow, style2: { transform: 'rotate(180deg)' }, icon: arrow },
        { value: 'flex-end', label: 'Низ', icon: arrow, style: { transform: 'rotate(90deg)' } },
        { value: 'stretch', label: 'Растянуть', icon: out }
    ];

    const directionOptions = [
        { value: 'row', label: 'Строка', icon: arrow },
        { value: 'column', label: 'Колонка', icon: arrow, style: { transform: 'rotate(90deg)' } }
    ];

    useEffect(() => {
        const isPerfectlyCentered =
            justifyContent === 'center' &&
            alignItems === 'center' &&
            flexDirection === 'row';

        if (isPerfectlyCentered && !isCentered) {
            setIsCentered(true);

            setTimeout(() => {
                setShowOffer(true);
                updateQuestStatus('centerDiv', true);
            }, 500);
        } else if (!isPerfectlyCentered && isCentered) {
            setIsCentered(false);
            setShowOffer(false);
        }
    }, [justifyContent, alignItems, flexDirection, isCentered]);

    const handleJustifyChange = (value) => {
        if (!showOffer) {
            setJustifyContent(value);
        }
    };

    const handleAlignChange = (value) => {
        if (!showOffer) {
            setAlignItems(value);
        }
    };

    const handleDirectionChange = (value) => {
        if (!showOffer) {
            setFlexDirection(value);
        }
    };

    const resetGame = () => {
        setJustifyContent('flex-start');
        setAlignItems('flex-start');
        setFlexDirection('row');
        setIsCentered(false);
        setShowOffer(false);
    };

    return (
        <div className='center-div-container'>
            <div>
                <div className="exercise">
                    <p>К следующей точке ведёт куча проводов. Помоги сетевому пакету протиснуться к центральному проводу.</p>
                    <p>Используй CSS Flexbox, чтобы поместить блок в центр контейнера!</p>
                </div>

                <div className="playground-container">
                    <div className="playground-header">
                        <span>Flex Container</span>
                        <div className="flex-info">
                            <span>display: flex;</span>
                            <span>flex-direction: {flexDirection};</span>
                            <span>justify-content: {justifyContent};</span>
                            <span>align-items: {alignItems};</span>
                        </div>
                    </div>

                    <div
                        className={`flex-playground ${isCentered ? 'centered' : ''}`}
                        style={{
                            display: 'flex',
                            flexDirection: flexDirection,
                            justifyContent: justifyContent,
                            alignItems: alignItems,
                            minHeight: '400px'
                        }}
                    >
                        <div className={`floating-block ${showOffer ? 'transforming' : ''}`}>
                            {!showOffer ? (
                                <img src={pack} className="block-icon" />
                            ) : (
                                <div className="offer-content">
                                    <span className="offer-icon">Успех!</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="playground-panel">
                <h2>Управление Flexbox</h2>

                <div className="control-section">
                    <label className="control-label">
                        FLEX-DIRECTION
                    </label>
                    <div className="buttons">
                        {directionOptions.map(option => (
                            <div className={flexDirection === option.value ? 'active' : ''}>
                                <button
                                    key={option.value}
                                    className={'control-btn'}
                                    onClick={() => handleDirectionChange(option.value)}
                                    disabled={showOffer}
                                >
                                    <img style={option.style} src={option.icon} />
                                    <span className="btn-label">{option.label}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="control-section">
                    <label className="control-label">
                        JUSTIFY-CONTENT
                    </label>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="0"
                            max={justifyOptions.length - 1}
                            step="1"
                            value={justifyOptions.findIndex(opt => opt.value === justifyContent)}
                            onChange={(e) => handleJustifyChange(justifyOptions[e.target.value].value)}
                            disabled={showOffer}
                            className="css-slider"
                        />
                        <div className="slider-labels">
                            {justifyOptions.map(opt => (
                                <span
                                    key={opt.value}
                                    className={`slider-label ${justifyContent === opt.value ? 'active' : ''}`}
                                    onClick={() => handleJustifyChange(opt.value)}
                                >
                                    <div className='btn-icon'>
                                        <img src={opt.icon} style={opt.style} className="label-icon-small" />
                                        {opt.icon2 && <img src={opt.icon2} style={opt.style2} className="label-icon-small" />}
                                    </div>
                                    <span className="label-text">{opt.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="control-section">
                    <label className="control-label">
                        ALIGN-ITEMS
                    </label>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="0"
                            max={alignOptions.length - 1}
                            step="1"
                            value={alignOptions.findIndex(opt => opt.value === alignItems)}
                            onChange={(e) => handleAlignChange(alignOptions[e.target.value].value)}
                            disabled={showOffer}
                            className="css-slider"
                        />
                        <div className="slider-labels">
                            {alignOptions.map(opt => (
                                <span
                                    key={opt.value}
                                    className={`slider-label ${alignItems === opt.value ? 'active' : ''}`}
                                    onClick={() => handleAlignChange(opt.value)}
                                >
                                    <div className='btn-icon'>
                                        <img src={opt.icon} style={opt.style} className="label-icon-small" />
                                        {opt.icon2 && <img src={opt.icon2} style={opt.style2} className="label-icon-small" />}
                                    </div>
                                    <span className="label-text">{opt.label}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="progress-indicator">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${(justifyContent === 'center' ? 33.33 : 0) +
                                    (alignItems === 'center' ? 33.33 : 0) +
                                    (flexDirection === 'row' ? 33.34 : 0)
                                    }%`
                            }}
                        ></div>
                    </div>
                </div>

                {!showOffer && <div className="stats-container">
                    <div className="attempts">
                        Попыток: <span>0</span>
                    </div>
                    <div className="status">
                        В процессе
                    </div>
                </div>}
                <button className="new-btn" onClick={resetGame}>
                    Начать заново
                </button>

            </div>
        </div>
    );
};

export default CenterDivModal;