import { List as Container} from '@material-ui/core';
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from '@material-ui/icons/Person';

interface ListProps {
    ListData: Array<any>
}

function List({ListData}: ListProps){
    return (
        <Container 
            subheader={
                <ListSubheader>접속자 목록</ListSubheader>
            }
            style={{ height: "150px", overflow: "auto"}}     
        >   
            {ListData.map((value, key)=> {
                const { name } = value;
                return (
                    <ListItem key={key} dense={true}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {name}
                        </ListItemText>
                    </ListItem>
                ) 
            })}
            
        </Container>
    );
}
export default List;