import { Card, CardContent, Typography } from "@mui/material";
import { Moment } from "moment";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

class Solution {
    id: string;
    problem_uid: string;
    UFID: string;
    solution: string[];
    datetime: Moment;
    
    constructor (id: string, problem_uid: string, UFID: string, solution: string[], datetime: Moment) {
        this.id = id;
        this.problem_uid = problem_uid;
        this.UFID = UFID;
        this.solution = solution;
        this.datetime = datetime;
    }

    hasUFID() {
      return this.UFID;
    }

    // modeled similarly to ProblemCard, for use on SolutionListView
      // still need to add view for specific solution
    SolutionCard(): ReactElement {
        return (
          <Card sx={{ minWidth: 275 }} key={this.id}>
            <CardContent>
              <Typography variant="h5" component="div">
                {this.UFID}
              </Typography>
              <Typography variant="body2">
                {this.solution}
              </Typography>
              <Link to={'/view/'+this.id}>
                View Solutions
              </Link>
              <Typography sx={{ fontSize: 11 }} color="text.secondary" align={"right"}>
                id: {this.id}
              </Typography>
            </CardContent>
          </Card>
        );
      }
}


export default Solution;