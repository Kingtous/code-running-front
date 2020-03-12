import React, {useEffect} from "react";
import {Paper, Table, TableCell, TableRow} from "@material-ui/core";
import {getBasicAuthHeaderByToken,getToken, HttpConstants} from "../../static/HttpConstant";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Timestamp from 'react-timestamp';


const useStyles = makeStyles(
    {
        "tableCell": {
            minWidth: 50
        }
    }
);


export default function MyCodePage() {
    const [codes, setCodes] = React.useState([]);
    const classes = useStyles();

    const getCodes = async () => {
        let result = await ((await fetch(HttpConstants.get_all_code_url, {
            headers: getBasicAuthHeaderByToken()
        })).json());

        console.log(result);
        if (result.code === 0) {
            setCodes(result.data);
        }
    };

    useEffect(() => {
        getCodes();
    }, []);

    function handleDownload(url) {
        window.open(
            url+"?token="+getToken(),'Download'
        );
    }

    function handleEdit() {

    }

    function handleDelete() {

    }

    return (
        <div>
            <Paper>

                <Table>
                    <TableRow>
                        <TableCell className={classes.tableCell} align={"center"}>
                            代码编号
                        </TableCell>
                        <TableCell className={classes.tableCell} align={"center"}>
                            代码类型
                        </TableCell>
                        <TableCell className={classes.tableCell} align={"center"}>
                            代码上传时间
                        </TableCell>
                        <TableCell className={classes.tableCell} align={"center"}>
                            操作
                        </TableCell>
                    </TableRow>
                    {codes.map((code) => {
                        return (
                            <TableRow key={code.id}>
                                <TableCell className={classes.tableCell} align={"center"}>
                                    {code.id}
                                </TableCell>
                                <TableCell className={classes.tableCell} align={"center"}>
                                    {code.code_type === 0 ? "C++" : code.code_type === 1 ? "Java" : "Python3"}
                                </TableCell>
                                <TableCell className={classes.tableCell} align={"center"}>
                                    <Timestamp date={code.create_date} relative
                                               options={{includeDay: true, twentyFourHour: true}}/>
                                </TableCell>
                                <TableCell className={classes.tableCell} align={"center"}>
                                    <Button onClick={() => handleDownload(code.local_path)}>
                                        下载
                                    </Button>
                                    <Button onClick={handleEdit}>
                                        编辑
                                    </Button>
                                    <Button onClick={handleDelete}>
                                        删除
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </Table>
            </Paper>
        </div>
    );

}