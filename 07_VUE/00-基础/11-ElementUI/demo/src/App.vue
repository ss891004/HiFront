<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">添加学生</el-button>
        <el-table :data="studentList" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="age" label="年龄" width="120"></el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加学生信息" :visible.sync="dialogVisible" width="30%">
            <el-form>
              <el-form-item label="ID">
                <el-input v-model="form.id"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
        onSubmit(){
          axios.post(`${process.env.VUE_APP_BASE_URL}/student`,{
            student:this.form
          }).then(() => {
            this.getStudentList();
            this.dialogVisible = false;
          })
        },
        del(id) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    axios
                        .delete(`${process.env.VUE_APP_BASE_URL}/student/${id}`)
                        .then(() => {
                            this.$message({
                                type: "success",
                                message: "删除成功!"
                            });
                            this.getStudentList();
                        });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        getStudentList() {
            axios.get(`${process.env.VUE_APP_BASE_URL}/student`).then(res => {
                this.studentList = res.data;
            });
        }
    },

    data() {
        return {
            studentList: [],
            dialogVisible: false,
            form:{
              id:"",
              name:"",
              age:""
            }
        };
    },

    created() {
        this.getStudentList();
    }
};
</script>


