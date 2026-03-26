import { useState, useEffect, useCallback } from 'react';
import { useQuest } from '../../context/questContext';
import '../../styles/modals/FindSecret.css';

const systemIcons = {
    server: '🖥️',
    database: '🗄️',
    cloud: '☁️',
    firewall: '🔥',
    router: '🌐',
    terminal: '💻',
    secret: '🔐'
};

const FindSecret = () => {
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [found, setFound] = useState(false);
    const [cssProperties, setCssProperties] = useState({
        zIndex: {},
        opacity: {},
        transform: {},
        filter: {}
    });
    const [attempts, setAttempts] = useState(0);
    const [secretId, setSecretId] = useState(null);
    const { updateQuestStatus } = useQuest();

    const initializeElements = useCallback(() => {
        const newElements = [];
        const types = ['server', 'database', 'cloud', 'firewall', 'router', 'terminal'];

        for (let i = 0; i < 15; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const isSecret = i === 7;

            newElements.push({
                id: i,
                type: isSecret ? 'secret' : type,
                icon: isSecret ? systemIcons.secret : systemIcons[type],
                label: isSecret ? 'СЕКРЕТНЫЙ ФАЙЛ' : `${type.toUpperCase()} ${i + 1}`,
                initialZIndex: Math.floor(Math.random() * 10) + 1,
                initialLeft: 50 + Math.random() * 300,
                initialTop: 50 + Math.random() * 200,
                initialRotation: Math.random() * 20 - 10,
                initialOpacity: 0.7 + Math.random() * 0.3,
                isSecret
            });

            if (isSecret) {
                setSecretId(i);
            }
        }

        const shuffled = newElements.sort(() => Math.random() - 0.5);
        setElements(shuffled);

        const initialZIndex = {};
        const initialOpacity = {};
        const initialTransform = {};
        const initialFilter = {};

        shuffled.forEach(el => {
            initialZIndex[el.id] = el.initialZIndex;
            initialOpacity[el.id] = el.initialOpacity;
            initialTransform[el.id] = `rotate(${el.initialRotation}deg)`;
            initialFilter[el.id] = 'none';
        });

        setCssProperties({
            zIndex: initialZIndex,
            opacity: initialOpacity,
            transform: initialTransform,
            filter: initialFilter
        });

        setFound(false);
        setSelectedElement(null);
        setAttempts(0);
    }, []);

    useEffect(() => {
        initializeElements();
    }, [initializeElements]);

    useEffect(() => {
        if (secretId !== null && !found && elements.length > 0) {
            const secretZIndex = cssProperties.zIndex[secretId] || 0;
            const allOtherZIndices = elements
                .filter(el => el.id !== secretId)
                .map(el => cssProperties.zIndex[el.id] || 0);

            const isOnTop = allOtherZIndices.length === 0 ||
                secretZIndex > Math.max(...allOtherZIndices);

            if (isOnTop && !found) {
                setFound(true);
                updateQuestStatus('findSecret', true);
            }
        }
    }, [cssProperties.zIndex, secretId, elements, found, updateQuestStatus]);

    const handleElementClick = useCallback((id) => {
        setSelectedElement(id);
        setAttempts(prev => prev + 1);
    }, []);

    const updateZIndex = useCallback((id, operation) => {
        setCssProperties(prev => {
            const newZIndex = { ...prev.zIndex };
            if (operation === 'increase') {
                newZIndex[id] = (newZIndex[id] || 1) + 1;
            } else if (operation === 'decrease') {
                newZIndex[id] = Math.max(1, (newZIndex[id] || 1) - 1);
            }
            return { ...prev, zIndex: newZIndex };
        });
    }, []);

    const updateOpacity = useCallback((id, value) => {
        setCssProperties(prev => ({
            ...prev,
            opacity: {
                ...prev.opacity,
                [id]: Math.max(0.1, Math.min(1, value))
            }
        }));
    }, []);

    const updateTransform = useCallback((id, property, value) => {
        setCssProperties(prev => {
            const currentTransform = prev.transform[id] || '';
            let newTransform;

            if (property === 'rotate') {
                // Preserve scale if it exists
                const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
                const scale = scaleMatch ? scaleMatch[1] : 1;
                newTransform = `rotate(${value}deg) scale(${scale})`;
            } else if (property === 'scale') {
                // Preserve rotation if it exists
                const rotateMatch = currentTransform.match(/rotate\(([^)]+)\)/);
                const rotate = rotateMatch ? rotateMatch[1] : '0deg';
                newTransform = `${rotate} scale(${value})`;
            } else {
                newTransform = currentTransform;
            }

            return {
                ...prev,
                transform: {
                    ...prev.transform,
                    [id]: newTransform
                }
            };
        });
    }, []);

    const updateFilter = useCallback((id, type, value) => {
        setCssProperties(prev => {
            let newFilter = '';
            if (type === 'blur') {
                newFilter = `blur(${value}px)`;
            } else if (type === 'brightness') {
                newFilter = `brightness(${value})`;
            }
            
            return {
                ...prev,
                filter: {
                    ...prev.filter,
                    [id]: newFilter
                }
            };
        });
    }, []);

    const resetGame = useCallback(() => {
        initializeElements();
    }, [initializeElements]);

    const resetElement = useCallback(() => {
        if (selectedElement !== null) {
            const element = elements.find(el => el.id === selectedElement);
            if (element) {
                setCssProperties(prev => ({
                    zIndex: {
                        ...prev.zIndex,
                        [selectedElement]: element.initialZIndex
                    },
                    opacity: {
                        ...prev.opacity,
                        [selectedElement]: element.initialOpacity
                    },
                    transform: {
                        ...prev.transform,
                        [selectedElement]: `rotate(${element.initialRotation}deg)`
                    },
                    filter: {
                        ...prev.filter,
                        [selectedElement]: 'none'
                    }
                }));
            }
        }
    }, [selectedElement, elements]);

    const handleCompleteQuest = useCallback(() => {
        if (found) {
            updateQuestStatus('findSecret', true);
        }
    }, [found, updateQuestStatus]);

    return (
        <div className="find-secret-modal-container">
            <div className="find-secret-modal" onClick={(e) => e.stopPropagation()}>
                <h2 style={{color:'var(--white-purple)'}}>Поиск секретного ключа</h2>

                <div className="modal-question">
                    <p>Секретный ключ для расшифровки данных потерялся. Секретный файл (🔐), который хранит все ключи, необходимо найти среди множества элементов информационной системы.</p>
                    <p>Используйте панель управления справа, чтобы изменять CSS-свойства и найти его!</p>
                    <p><strong>Подсказка:</strong> Секретный файл должен быть поверх всех остальных элементов (самый большой z-index)</p>
                </div>

                <div className="elements-container" style={{ position: 'relative', minHeight: '400px' }}>
                    {elements.map((element) => (
                        <div
                            key={element.id}
                            className={`system-element ${selectedElement === element.id ? 'selected' : ''} ${element.isSecret && found ? 'found' : ''}`}
                            style={{
                                position: 'absolute',
                                left: `${element.initialLeft}px`,
                                top: `${element.initialTop}px`,
                                zIndex: cssProperties.zIndex[element.id] || element.initialZIndex,
                                opacity: cssProperties.opacity[element.id] !== undefined ? cssProperties.opacity[element.id] : element.initialOpacity,
                                transform: cssProperties.transform[element.id] || `rotate(${element.initialRotation}deg)`,
                                filter: cssProperties.filter[element.id] || 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => handleElementClick(element.id)}
                        >
                            <div className="element-icon">{element.icon}</div>
                            <div className="element-label">{element.label}</div>
                            <div className="element-zindex">z-index: {cssProperties.zIndex[element.id] || element.initialZIndex}</div>
                        </div>
                    ))}
                </div>

                {selectedElement !== null && !found && (
                    <div className="control-panel">
                        <h3>Управление элементом</h3>

                        <div className="control-group">
                            <label>Z-Index (приоритет отображения):</label>
                            <div className="button-group">
                                <button onClick={() => updateZIndex(selectedElement, 'decrease')}>-</button>
                                <span>{cssProperties.zIndex[selectedElement] || elements.find(el => el.id === selectedElement)?.initialZIndex}</span>
                                <button onClick={() => updateZIndex(selectedElement, 'increase')}>+</button>
                            </div>
                        </div>

                        <div className="control-group">
                            <label>Прозрачность (Opacity):</label>
                            <input
                                type="range"
                                min="0.1"
                                max="1"
                                step="0.1"
                                value={cssProperties.opacity[selectedElement] !== undefined ? cssProperties.opacity[selectedElement] : 1}
                                onChange={(e) => updateOpacity(selectedElement, parseFloat(e.target.value))}
                            />
                            <span>{(cssProperties.opacity[selectedElement] !== undefined ? cssProperties.opacity[selectedElement] : 1).toFixed(1)}</span>
                        </div>

                        <div className="control-group">
                            <label>Поворот (Rotate):</label>
                            <input
                                type="range"
                                min="-180"
                                max="180"
                                value={parseInt(cssProperties.transform[selectedElement]?.match(/rotate\(([^)]+)\)/)?.[1] || 0)}
                                onChange={(e) => updateTransform(selectedElement, 'rotate', e.target.value)}
                            />
                            <span>{parseInt(cssProperties.transform[selectedElement]?.match(/rotate\(([^)]+)\)/)?.[1] || 0)}°</span>
                        </div>

                        <div className="control-group">
                            <label>Масштаб (Scale):</label>
                            <input
                                type="range"
                                min="0.5"
                                max="2"
                                step="0.1"
                                value={parseFloat(cssProperties.transform[selectedElement]?.match(/scale\(([^)]+)\)/)?.[1] || 1)}
                                onChange={(e) => updateTransform(selectedElement, 'scale', parseFloat(e.target.value))}
                            />
                            <span>{parseFloat(cssProperties.transform[selectedElement]?.match(/scale\(([^)]+)\)/)?.[1] || 1).toFixed(1)}</span>
                        </div>

                        <div className="control-group">
                            <label>Размытие (Blur):</label>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.5"
                                onChange={(e) => updateFilter(selectedElement, 'blur', e.target.value)}
                            />
                            <span>{cssProperties.filter[selectedElement]?.match(/blur\(([^)]+)\)/)?.[1] || 0}px</span>
                        </div>

                        <div className="control-group">
                            <label>Яркость (Brightness):</label>
                            <input
                                type="range"
                                min="0.2"
                                max="2"
                                step="0.1"
                                onChange={(e) => updateFilter(selectedElement, 'brightness', e.target.value)}
                            />
                            <span>{cssProperties.filter[selectedElement]?.match(/brightness\(([^)]+)\)/)?.[1] || 1}</span>
                        </div>

                        <button className="reset-element-btn" onClick={resetElement}>
                            Сбросить для этого элемента
                        </button>
                    </div>
                )}
            </div>

            <div className="game-footer">
                <div className="game-stats">
                    <span className="info-message">Попыток: {attempts}</span>
                    {found && <span className="victory">Ключ найден! Задание выполнено!</span>}
                </div>

                <div className="game-controls">
                    {!found && (
                        <button className="reset-btn" onClick={resetGame}>
                            Новая игра
                        </button>
                    )}
                    {found && (
                        <button className="reset-btn" onClick={handleCompleteQuest}>
                            Завершить задание
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindSecret;