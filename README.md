## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true, add_index :users, :name, unique: true|
|email|string|null: false, foreign_key: true, add_index :users, :email, unique: true|
|password|string|null: false|


### Association
- has_many :group
- has_many :post

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true, add_index :groups, :group_name, unique: true|
|memmber|string|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :post

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|post|text|null: false|
|image|text|null: false|

### Association
- belongs_to :users
- belongs_to :groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

