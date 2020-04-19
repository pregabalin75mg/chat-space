## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true, add_index :users, :name, unique: true|
|email|string|null: false, foreign_key: true, add_index :users, :email, unique: true|




## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

