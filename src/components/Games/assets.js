import RAM from '../DevPathComponents/images/RAM.svg';
import VIDEO_CARD from '../DevPathComponents/images/VIDEOCARD.svg';
import HDD from '../DevPathComponents/images/HDD.svg';
import POWER_UNIT from '../DevPathComponents/images/PU.svg';
import CPU from '../DevPathComponents/images/CPU.svg';
import MOTHERBOARD from '../DevPathComponents/images/MotherBoard.svg';

export const game_cards = [
    {id: 1, type: 'ram', img: RAM, name:'{ Оперативная память }'},
    {id: 2, type: 'power_unit', img: POWER_UNIT, name:'{ Блок питания }'},
    {id: 3, type: 'cpu', img: CPU, name:'{ Центральный процессор }'},
    {id: 4, type: 'videocard', img: VIDEO_CARD, name:'{ Видеокарта }'},
    {id: 5, type: 'motherboard', img: MOTHERBOARD, name:'{ Материнская плата }'},
    {id: 6, type: 'hdd', img: HDD, name:'{ Жесткий диск }'},
]