import React, {
  Component,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import "./DetailOffice.css";
import {
  Row,
  Col,
  Card,
  DatePicker,
  Button,
  Input,
  Select,
  Form,
  Table,
} from "antd";
import moment from "moment";
import { isBrowser } from "react-device-detect";
const { Option } = Select;
const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
class Abnormal extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "No",
        dataIndex: "no",
        width: "10%",
      },
      {
        title: "時間",
        dataIndex: "time",
        width: "30%",
      },
      {
        title: "値(mm)",
        dataIndex: "value",
        editable: true,
        width: "30%",
      },
      {
        title: "修正した値(mm)",
        dataIndex: "reviseValue",
        editable: true,
        width: "30%",
      },
    ];
    this.state = {
      dataSource: [
        {
          key: 0,
          no: 1,
          time: "2019/10/25 10:55",
          value: 30,
          reviseValue: 0,
        },
        {
          key: 1,
          no: 2,
          time: "2019/10/25 11:55",
          value: 30,
          reviseValue: 0,
        },
        {
          key: 2,
          no: 3,
          time: "2019/10/25 12:05",
          value: 0,
          reviseValue: 28,
        },
      ],
    };
  }
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };
  render() {
    let { dataSource } = this.state;
    let components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    let columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div className={isBrowser ? "home" : "homeMobile"}>
        <Row style={{ paddingBottom: "24px" }}>
          <Col flex="auto">
            <Row justify="start">
              <h2 style={{ margin: 0 }}>入力値が正常か異常か判別</h2>
            </Row>
          </Col>
          <Col flex="200px">
            <Row justify="end">
              <Select defaultValue="田布施" style={{ width: 120 }}>
                <Option value="田布施">田布施</Option>
                <Option value="東埼玉">東埼玉</Option>
                <Option value="東京">東京</Option>
              </Select>
            </Row>
          </Col>
        </Row>
        {/* <Row gutter={[8, 8]} style={{ padding: "16px 0" }}>
          <Breadcrumb style={{ paddingLeft: "6px", color: "#0000FF" }}>
            <Breadcrumb.Item>
              <Link to="/home">ホームページ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/office">事業所</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/office/1">田布施</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Text strong>入力値が正常か異常か判別</Text>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row> */}
        <Card style={{ width: "100%" }}>
          <Row align="middle" justify="center" gutter={[32, 16]}>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>データソース</Col>
                <Col span={18}>
                  <Select
                    defaultValue="降雨量"
                    style={{ width: "100%" }}
                  ></Select>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>開始時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment("2019/10/25", "YYYY/MM/DD")}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 7 }} xs={{ span: 24 }}>
              <Row align="middle" justify="center">
                <Col span={6}>終了時間</Col>
                <Col span={18}>
                  <DatePicker
                    style={{ width: "100%" }}
                    showTime
                    defaultValue={moment("2019/12/31", "YYYY/MM/DD")}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 3 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">フィルタ</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", marginTop: "36px" }} gutter={[32, 16]}>
          <Row align="middle" justify="center" gutter={[32, 16]}>
            <Col lg={{ span: 21 }} xs={{ span: 24 }}>
              <Row align="middle" justify="end">
                <Col lg={{ span: 3 }} xs={{ span: 6 }}>
                  正常値(mm)
                </Col>
                <Col lg={{ span: 4 }} xs={{ span: 8 }}>
                  <Input placeholder="Basic usage" defaultValue={10} />
                </Col>
                <Col span={2}> ~ </Col>
                <Col lg={{ span: 4 }} xs={{ span: 8 }}>
                  <Input placeholder="Basic usage" defaultValue={30} />
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 3 }} xs={{ span: 24 }}>
              <Row justify="end">
                <Button type="primary">保存</Button>
              </Row>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: "100%", marginTop: "36px" }} gutter={[32, 16]}>
          <Row align="middle" justify="center">
            <Table
              style={{ width: "100%" }}
              components={components}
              rowClassName={() => "editable-row"}
              bordered
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: "max-content" }}
            ></Table>
          </Row>
          <Row justify="end" gutter={[16, 8]}>
            <Col>
              <Button type="primary">リセット</Button>
            </Col>
            <Col>
              <Button type="primary">エクセルファイル出力</Button>
            </Col>
            <Col>
              <Button type="primary">保存しMatlabに送信</Button>
            </Col>
            <Col>
              <Button type="primary">保存</Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Abnormal;
