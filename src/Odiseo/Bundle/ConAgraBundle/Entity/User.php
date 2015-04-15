<?php

namespace Odiseo\Bundle\ConAgraBundle\Entity;

use DateTime;
use Odiseo\Bundle\ProjectBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 */
class User extends BaseUser
{
    protected $country;
    protected $province;
    protected $position;
    protected $distributor;
    protected $phone;
    
    public function __construct()
    {
    	parent::__construct();
    }

    public function __toString()
    {
    	return $this->getUsername();
    }
        
    public function getProvince() 
    {
    	return $this->province;
    }
    
    public function setProvince($province) 
    {
    	$this->province = $province;
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
	
	public function getPosition() 
	{
		return $this->position;
	}
	
	public function setPosition($position) 
	{
		$this->position = $position;
		return $this;
	}
	
	public function getDistributor() 
	{
		return $this->distributor;
	}
	
	public function setDistributor(Distributor $distributor) 
	{
		$this->distributor = $distributor;
		return $this;
	}
	
	public function getPhone() 
	{
		return $this->phone;
	}
	
	public function setPhone($phone) 
	{
		$this->phone = $phone;
		return $this;
	}
	
 	public function getUsername()
    {
        return $this->email;
    }
    
    public function setUsername($username)
    {
    	$this->username = $username;
    	
    	$this->setEmail($username);
    
    	return $this;
    }
}