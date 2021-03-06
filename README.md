## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, :name, unique: true|
|email|string|null: false, add_index :users, :email, unique: true|
|password|string|null: false|


### Association
- has_many :groups, through: :users_groups
- has_many :posts
- has_many :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :groups, :name, unique: true|

### Association
- has_many :users, through: :users_groups
- has_many :posts
- has_many :users_groups

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|post|text|-|
|image|text|-|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

