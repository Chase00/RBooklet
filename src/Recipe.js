import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Recipe = ({ title, calories, image, key, ingredients }) => {
    return (
        <div>
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>{title}</Typography>
                <Typography variant="subtitle1" gutterBottom>({calories} Calories)</Typography>
                <img src={image} alt={key} />

                <Accordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1">Ingredients</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                {ingredients.map(ingredient => (
                                    <Typography variant="subtitle1" gutterBottom>{ingredient.text}</Typography>
                                ))}
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
        <br />
        </div>
    );
}

export default Recipe;