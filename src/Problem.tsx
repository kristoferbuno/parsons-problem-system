import { Card, CardContent, Typography } from "@mui/material";
import { Moment } from "moment";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

class Problem {
    id: string;
    title: string;
    desc: string;
    problem: string[];
    submitter: string;
    datetime: Moment;
    
    constructor (id: string, title: string, desc: string, problem: string[], submitter: string, datetime: Moment) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.problem = problem;
        this.submitter = submitter;
        this.datetime = datetime;
    }

    hasTitle() {
        return this.title;
    }

    ProblemCard(): ReactElement {
        return (
          <Card sx={{ minWidth: 275 }} key={this.id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {this.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {this.desc}
              </Typography>
              <Typography variant="body2">
                {this.problem}
              </Typography>
              <Button variant="outlined" href={'/solve/'+this.id}>Solve</Button>
              <span> </span>
              <Button variant="outlined" href={'/viewsolutions/'+this.id}>View Solutions List</Button>
              <Typography sx={{ fontSize: 11 }} color="text.secondary" align={"right"}>
                id: {this.id}
              </Typography>
            </CardContent>
          </Card>
        );
      }
}

export default Problem;