import { CardContainerFather, CardContainer, CardImg, ButtonCard, ContentContainer, TextContainer} from './styles/ShoppingCard.styles';

// importar imagenes
import Gato from '../../assets/img/bolas.png';
import Arena from '../../assets/img/arena.png';
import Peina from '../../assets/img/peine.png';
import Correa from '../../assets/img/correa.png';
import Talco from '../../assets/img/talco.png';


// importar icono
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ShoppingCard = () => {

    const handleClick = () => {
        console.log('funcionalidad acá');
    }

    const productos =[
        {
            'id':'1',
            'name':'ball',
            'tittle':'Juguete de perro',
            'precio':2500,
            'url': Gato,
            'icon': <FavoriteBorderIcon />,
            'background': '#ABE5AE',
            'animal': 'cat',
        },
        {
            'id':'2',
            'name':'dogsfood',
            'tittle':'Arena para gato',
            'precio':2500,
            'url': Arena,
            'icon': <FavoriteBorderIcon />,
            'background': '#d1723f',
            'animal': 'cat',
        },
        {
            'id':'3',
            'name':'brushair',
            'tittle':'Cepillo',
            'precio':2500,
            'url': Peina,
            'icon': <FavoriteBorderIcon />,
            'background': '#488db3',
            'animal': 'cat',
        },
        {
            'id':'4',
            'name':'catsfood',
            'tittle':'Correa de gato',
            'precio':2500,
            'url': Correa,
            'icon': <FavoriteBorderIcon />,
            'background': '#58c084',
            'animal': 'cat',
        },
        {
            'id':'5',
            'name':'Talco',
            'tittle':'Talco',
            'precio':3500,
            'url': Talco,
            'icon': <FavoriteBorderIcon />,
            'background': '#BAABE5',
            'animal': 'cat',
        },
    ];    

    return (
        <>
        <CardContainerFather>
            {productos.filter(x=>x.animal==='cat').map((x, _)=>{
                return(
                    <CardContainer backgroundC={x.background} key={_}>
                        <CardImg src={x.url} alt={x.name} />
                        <ContentContainer>
                            <h2 class="nombre">{x.tittle}</h2>
                                    <TextContainer>
                                        <p class="precio">{x.precio}</p>
                                        {x.icon}
                                    </TextContainer>
                                    <ButtonCard onClick={handleClick}>Agregar al carrito</ButtonCard>
                        </ContentContainer>
                            
                    </CardContainer>
                );
            })
            }
        </CardContainerFather>
        </>
    );
};

export default ShoppingCard;