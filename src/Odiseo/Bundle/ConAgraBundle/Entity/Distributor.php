<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;

class Distributor
{
	protected $id;
	protected $name;
	protected $country;
	protected $createdAt;
	protected $updatedAt;
	
	public function __construct()
	{
		$this->createdAt = new \DateTime('now');
	}
	
	public function getId() 
	{
		return $this->id;
	}
	
	public function setId($id) 
	{
		$this->id = $id;		
		return $this;
	}
	
	public function setCreatedAt($createdAt)
	{
		$this->createdAt = $createdAt;
		return $this;
	}
	
	public function getCreatedAt()
	{
		return $this->createdAt;
	}
	
	public function setUpdatedAt($updatedAt)
	{
		$this->updatedAt = $updatedAt;
		return $this;
	}
	
	public function getUpdatedAt()
	{
		return $this->updatedAt;
	}
	
	public function getName() 
	{
		return $this->name;
	}
	
	public function setName($name)
	{
		$this->name = $name;
		return $this;
	}
	
	public function getCountry()
	{
		return $this->country;
	}
	
	public function setCountry(Country $country)
	{
		$this->country = $country;
		return $this;
	}
}