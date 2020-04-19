## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true, add_index :users, :name, unique: true|
|email|string|null: false, foreign_key: true, add_index :users, :email, unique: true|

### Association
- has_many :group
- has_many :post
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true, add_index :groups, :group_name, unique: true|
|memmber|string|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :post
- has_many :group_users

## Postテーブル
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

