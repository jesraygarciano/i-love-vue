<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form action="" @submit.prevent="addItem">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="item.name" />
                    </div>

                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control" model="item.price" />
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add" />
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: {

                }
            }
        },
        methods: {
        addItem() {
            let uri = 'http://notify.test/api/item/create';
            this.axios.post(uri, this.item).then((response) => {
                this.$toasted.show(response.data.success);
            });
        }
        }
    }

</script>